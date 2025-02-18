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
        if(Schema::hasTable('messages')){
            Schema::table("messages", function(Blueprint $table){
                $table->renameColumn("autor","sender");
                $table->renameColumn("texto","text");
            });
        }
        else
        {
            Schema::create('messages',function(Blueprint $table){
                $table->id();
                $table->timestamp('created-at');
                $table->string('sender',50);
                $table->string('email',50);
                $table->text('text');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("messages", function(Blueprint $table){
            $table->renameColumn("sender","autor");
            $table->renameColumn("text","texto");
        });
    }
};
