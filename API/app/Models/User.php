<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    public function getJWTIdentifier():mixed
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims():array
    {
        return [];
    }
    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'birth',
        'avatar',
        'gender',
        'permission',
        'role',
        'created_at',
        'updated_at'
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
