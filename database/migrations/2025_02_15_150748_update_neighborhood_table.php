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
        if (Schema::hasTable('bairros')) {
            Schema::rename('bairros', 'neighborhoods');

            Schema::table('neighborhoods', function (Blueprint $table) {
                $table->renameColumn('bairro', 'neighborhood');
            });
        } else {
            Schema::create('neighborhoods', function (Blueprint $table) {
                $table->id();
                $table->string('neighborhood', 50);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('neighborhoods', function (Blueprint $table) {
            $table->renameColumn('neighborhood', 'bairro');
        });

        Schema::rename('neighborhoods', 'bairros');
    }
};
