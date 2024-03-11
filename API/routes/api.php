<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware('api')->group(function () {
    Route::prefix('auth/v1')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh_token', [AuthController::class, 'refresh_token']);
        Route::get('profile', [AuthController::class, 'profile']);
    });
});
