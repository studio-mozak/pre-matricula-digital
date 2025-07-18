<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('process_stages', function (Blueprint $table) {
            $table->smallInteger('restriction_type')->default(1);
        });
    }

    public function down(): void
    {
        Schema::table('process_stages', function (Blueprint $table) {
            $table->dropColumn('restriction_type');
        });
    }
};
