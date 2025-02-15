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

        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('usuario','name');
            $table->renameColumn('senha','password');
            $table->renameColumn('telefone','phone');
            $table->renameColumn('creci','creci_number');
            $table->renameColumn('cargo','occupation');
            $table->renameColumn('foto','photo');
            $table->string('email',50)->unique()->change();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->softDeletesDatetime()->after('updated_at');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('name','usuario');
            $table->renameColumn('password','senha');
            $table->renameColumn('phone','telefone');
            $table->renameColumn('creci_number','creci');
            $table->renameColumn('occupation','cargo');
            $table->renameColumn('photo','foto');
            $table->dropColumn('email_verified_at');
            $table->dropColumn('remember_token');
            $table->dropColumn('deleted_at');
        });

        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
