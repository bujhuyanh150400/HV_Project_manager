<?php

namespace Database\Seeders;

use App\Helpers\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'id' => Uuid::uuid4()->toString(),
            'name' => 'Bùi Huy Anh',
            'email' => 'bujhuyanh150400@gmail.com',
            'password' => Hash::make('123456789'),
            'birth' => '2000-04-15 00:00:00',
            'gender' => 1,
            'avatar' => null,
            'permission' => 16,
            'role' => 16,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
