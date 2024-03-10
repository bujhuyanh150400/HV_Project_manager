<?php

namespace App\Helpers;

class Role
{
    const ALL = 16;
    const MANAGER_PROJECT = 15;
    const ADVISER = 14;
    const PERSON_ON_DUTY = 13;

    static function list(): array
    {
        return [
            self::ALL => [
                'value' => self::ALL,
                'text' => 'Full quyền'
            ],
            self::MANAGER_PROJECT => [
                'value' => self::MANAGER_PROJECT,
                'text' => 'Điều hành dự án'
            ],
            self::ADVISER => [
                'value' => self::ADVISER,
                'text' => 'Nhân viên giám sát, kiểm thử'
            ],
            self::PERSON_ON_DUTY => [
                'value' => self::PERSON_ON_DUTY,
                'text' => 'Nhân viên thực thi'
            ],
        ];
    }
}
