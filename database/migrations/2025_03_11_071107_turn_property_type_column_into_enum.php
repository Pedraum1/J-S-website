<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $unique_values = DB::table('property')->select('property_type')->distinct()->pluck('property_type')->toArray();

        Log::info('Unique values in property_type table: ', $unique_values);

        $correct_values = ['Casa', 'Apartamento', 'Terreno', 'Ponto Comercial', 'Sala'];
        $wrong_values = array_diff($unique_values, $correct_values);

        if (count($wrong_values) > 0) {

            foreach ($wrong_values as $wrong_value) {
                $newValue = $this->mapValue($wrong_value);

                DB::table('property')
                    ->where('property_type', $wrong_value)
                    ->update(['property_type' => $newValue]);

                Log::info("Converted values: '$wrong_value' para '$newValue'");
            }

        }

        Schema::table('property', function (Blueprint $table) {
            $table->enum('new_property_type', ['Casa', 'Apartamento', 'Terreno', 'Ponto Comercial', 'Sala'])->after('property_type');
        });

        DB::statement('UPDATE property SET new_property_type = property_type');

        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('property_type');
        });

        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('new_property_type', 'property_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('property', function (Blueprint $table) {
            $table->string('temp_property_type')->after('property_type');
        });

        DB::statement('UPDATE property SET temp_property_type = property_type');

        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('property_type');
        });

        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('temp_property_type', 'property_type');
        });
    }

    private function mapValue($inesperated_value)
    {
        $maping = [
            'casa' => 'Casa',
            'CASA' => 'Casa',
            'apt' => 'Apartamento',
            'Apto' => 'Apartamento',
            'APARTAMENTO' => 'Apartamento',
            'Lote' => 'Terreno',
            'TERRENO' => 'Terreno',
            'Comercial' => 'Ponto Comercial',
            'Loja' => 'Ponto Comercial',
            'Escritório' => 'Sala',
            'SALA COMERCIAL' => 'Ponto Comercial',
        ];

        return $maping[$inesperated_value] ?? 'Casa';
    }
};
