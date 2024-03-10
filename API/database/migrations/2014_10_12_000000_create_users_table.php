<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->comment('table dùng để lưu trữ nhân sự');
            $table->uuid('id')->primary();
            $table->string('name')->comment('Tên nhân sự');
            $table->string('email')->unique()->comment('Email nhân sự ( dùng để đăng nhập)');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->comment('Password nhân sự');
            $table->timestamp('birth')->comment('Ngày sinh nhân sự');
            $table->text('avatar')->nullable()->comment('Avatar của nhân sự');
            $table->smallInteger('gender')->default(1)->comment('Giới tính: 1 - Nam | 2 - nữ');
            $table->smallInteger('permission')->nullable()->comment('Phân quyền');
            $table->smallInteger('role')->nullable()->comment('Chức vụ nhân viên');
            $table->rememberToken();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
