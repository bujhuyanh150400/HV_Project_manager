<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => ['login', 'info']]);
    }

    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required', 'min:8', 'max:16'],
        ], [
            'email.required' => 'Vui lòng nhập địa chỉ email.',
            'email.email' => 'Địa chỉ email không hợp lệ.',
            'password.required' => 'Vui lòng nhập mật khẩu.',
            'password.min' => 'Mật khẩu phải có ít nhất :min ký tự.',
            'password.max' => 'Mật khẩu tối đa là :max ký tự.',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $token = auth()->attempt([
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ]);
        if (!$token) {
            return response()->json(['error' => 'Tài khoản không tồn tại'], 401);
        }
        return $this->createNewToken($token);
    }

    public function logout(): JsonResponse
    {
        auth()->logout();
        return response()->json(['message' => 'Bạn đã đăng xuất thành công']);
    }

    /**
     * Hàm lấy các thông tin token
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken(string $token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user(),
        ]);
    }

    public function refresh_token(): JsonResponse
    {
        return $this->createNewToken(auth()->refresh());
    }

    public function info(): JsonResponse
    {
        return response()->json(auth()->user());
    }
}
