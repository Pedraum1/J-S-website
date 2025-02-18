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
        if(Schema::hasTable('imoveis')){
            Schema::rename("imoveis","property");

            Schema::table("property",function(Blueprint $table){
                $table->dateTime('created_at')->after("garagens")->change();
                $table->dateTime('updated_at')->after("created_at")->change();
                $table->softDeletesDatetime()->after("updated_at");
                
                $table->renameColumn("anuncio","listing");
                $table->renameColumn("favorito","is_favorite");
                $table->renameColumn("descricao","description");
                $table->renameColumn('rua',"street");
                $table->renameColumn('numero',"street_number");
                $table->renameColumn('bairro',"neighborhood");
                $table->renameColumn('cidade',"city");
                $table->renameColumn('area',"area_size");
                $table->renameColumn('valor',"price");
                $table->renameColumn('taxa_condominio',"condo_fee");
                $table->renameColumn('corretor',"agent_id");
                $table->renameColumn('operacao',"operation_type");
                $table->renameColumn('tipo',"property_type");
                $table->renameColumn('quartos',"bedrooms");
                $table->renameColumn('suites',"master_bedrooms");
                $table->renameColumn('banheiros',"bathrooms");
                $table->renameColumn('salas',"rooms");
                $table->renameColumn('cozinhas',"kitchens");
                $table->renameColumn('servicos',"service_rooms");
                $table->renameColumn('garagens',"parking_spots");
            });

            Schema::table("property",function(Blueprint $table){
                $table->boolean("listing")->default(False)->change();
                $table->boolean("is_favorite")->default(False)->change();
                $table->integer("condo_fee")->default(0)->change();
                $table->integer("bedrooms")->default(0)->change();
                $table->integer("master_bedrooms")->default(0)->change();
                $table->integer("bathrooms")->default(0)->change();
                $table->integer("rooms")->default(0)->change();
                $table->integer("rooms")->default(0)->change();
                $table->integer("kitchens")->default(0)->change();
                $table->integer("service_rooms")->default(0)->change();
                $table->integer("parking_spots")->default(0)->change();

            });
        }
        else
        {
            Schema::create('property', function(Blueprint $table){
                $table->id();
                $table->boolean('listing');
                $table->boolean('is_favorite');
                $table->text('description');
                $table->string('street',100);
                $table->integer('street_number');
                $table->string('neighborhood',50);
                $table->string('city',50);
                $table->integer('area_size');
                $table->integer('price');
                $table->integer('condo_fee');
                $table->string('agent_id',50);
                $table->string('operation_type',50);
                $table->string('property_type',50);
                $table->integer('bedrooms');
                $table->integer('master_bedrooms');
                $table->integer('bathrooms');
                $table->integer('rooms');
                $table->integer('kitchens');
                $table->integer('service_rooms');
                $table->integer('parking_spots');
                $table->timestamps();
                $table->softDeletes();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("property", function (Blueprint $table){
            $table->renameColumn("listing","anuncio");
            $table->renameColumn("is_favorite","favorito");
            $table->renameColumn("description","descricao");
            $table->renameColumn("street",'rua');
            $table->renameColumn("street_number",'numero');
            $table->renameColumn("neighborhood",'bairro');
            $table->renameColumn("city",'cidade');
            $table->renameColumn("area_size",'area');
            $table->renameColumn("price",'valor');
            $table->renameColumn("condo_fee",'taxa_condominio');
            $table->renameColumn("agent_id",'corretor');
            $table->renameColumn("operation_type",'operacao');
            $table->renameColumn("property_type",'tipo');
            $table->renameColumn("bedrooms",'quartos');
            $table->renameColumn("master_bedrooms",'suites');
            $table->renameColumn("bathrooms",'banheiros');
            $table->renameColumn("rooms",'salas');
            $table->renameColumn("kitchens",'cozinhas');
            $table->renameColumn("service_rooms",'servicos');
            $table->renameColumn("parking_spots",'garagens');

            $table->dropColumn('deleted_at');

            $table->dateTime('created_at')->after("id")->change();
            $table->dateTime('updated_at')->after("created_at")->change();

        });

        Schema::rename("property","imoveis");
    }
};
