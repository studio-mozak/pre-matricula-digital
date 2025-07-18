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
        Schema::table('process_stages', function (Blueprint $table) {
            $table->boolean('allow_search')->default(false)->after('allow_waiting_list');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('process_stages', function (Blueprint $table) {
            $table->dropColumn('allow_search');
        });
    }
};
