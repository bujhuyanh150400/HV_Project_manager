<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [\App\Http\Controllers\UserController::class,'index']);
Route::get('/info', function () {
    phpinfo();
});
