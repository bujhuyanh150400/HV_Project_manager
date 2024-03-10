<?php

namespace App\Helper;

class Permission
{
    const ADMIN = 16;
    const MANAGER = 15;
    const EMPLOYEE = 14;

    static function list(): array
    {
        return [
            self::ADMIN => [
                'value' => self::ADMIN,
                'text' => 'Điều hành hệ thống'
            ],
            self::MANAGER => [
                'value' => self::MANAGER,
                'text' => 'Quản lý dự án'
            ],
            self::EMPLOYEE => [
                'value' => self::EMPLOYEE,
                'text' => 'Nhân viên'
            ],
        ];
    }
}
