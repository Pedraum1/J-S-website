<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('property', function (Blueprint $table) {
            $table->integer('new_agent_id')->nullable()->after('agent_id');
        });

        DB::statement("UPDATE property SET new_agent_id = 21 WHERE agent_id = 'SQ'");

        DB::statement("UPDATE property SET new_agent_id = 22 WHERE agent_id = 'JP'");

        DB::statement("UPDATE property SET new_agent_id = CAST(agent_id AS UNSIGNED) 
                      WHERE agent_id REGEXP '^[0-9]+$'");
        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('agent_id');
        });

        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('new_agent_id', 'agent_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('property', function (Blueprint $table) {
            $table->string('agent_id_old', 10)->nullable();
        });

        DB::statement("UPDATE property SET agent_id_old = 'SQ' WHERE agent_id = 21");

        DB::statement("UPDATE property SET agent_id_old = 'JP' WHERE agent_id = 22");

        DB::statement('UPDATE property SET agent_id_old = CAST(agent_id AS CHAR) 
                      WHERE agent_id != 21 AND agent_id != 22');

        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('agent_id');
        });

        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('agent_id_old', 'agent_id');
        });
    }
};
