<?php

namespace App\Http\Controllers;

use App\Models\Testing;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $user = Testing::all();
        dd($user);
    }
}
