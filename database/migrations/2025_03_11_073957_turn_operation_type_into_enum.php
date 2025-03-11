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
        $unique_values = DB::table('property')->select('operation_type')->distinct()->pluck('operation_type')->toArray();

        Log::info("Unique values in operation_type table: ", $unique_values);

        $correct_values = ['Aluguel','Venda','Temporada'];
        $wrong_values = array_diff($unique_values, $correct_values);

        if (count($wrong_values) > 0) {

            foreach ($wrong_values as $wrong_value) {
                $newValue = $this->mapValue($wrong_value);
                
                DB::table('property')
                    ->where('operation_type', $wrong_value)
                    ->update(['operation_type' => $newValue]);
                    
                Log::info("Converted values: '$wrong_value' para '$newValue'");
            }

        }

        Schema::table('property', function (Blueprint $table) {
            $table->enum('new_operation_type', ['Aluguel','Venda','Temporada'])->after('operation_type');
        });

        DB::statement('UPDATE property SET new_operation_type = operation_type');

        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('operation_type');
        });

        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('new_operation_type', 'operation_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('property', function (Blueprint $table) {
            $table->string('temp_operation_type')->after('operation_type');
        });
        
        DB::statement('UPDATE property SET temp_operation_type = operation_type');
        
        Schema::table('property', function (Blueprint $table) {
            $table->dropColumn('operation_type');
        });
        
        Schema::table('property', function (Blueprint $table) {
            $table->renameColumn('temp_operation_type', 'operation_type');
        });
    }

    private function mapValue($inesperated_value){
        $maping = [
            'venda'     => 'Venda',
            'VENDA'     => 'Venda',
            'compra'    => 'Venda',
            'COMPRA'    => 'Venda',
            'temporada' => 'Temporada',
            'TEMPORADA' => 'Temporada',
            'aluguel'   => 'Aluguel',
            'ALUGUEL'   => 'Aluguel'
        ];
        
        return $maping[$inesperated_value] ?? 'Aluguel';
    }
};
