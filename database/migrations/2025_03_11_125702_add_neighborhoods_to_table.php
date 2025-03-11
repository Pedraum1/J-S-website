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
        $neighborhoods = [
            'Bom Sucesso',
            'João XXIII',
            'Vila Pery',
            'Vila Manoel Sátiro',
            'Maraponga',
            'Parangaba',
            'Passaré',
            'Parquelândia',
            'Mondubim',
            'Conjunto Esperança',
            'Messejana',
            'Jardim América',
            'Jacarecanga',
            'Parque São José',            
        ];

        foreach($neighborhoods as $neighborhood){
            DB::table('neighborhoods')->insert(
                [
                    'name' => $neighborhood
                ]
            );
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
    }
};
