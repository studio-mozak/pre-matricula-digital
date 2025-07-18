<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('process_fields', function (Blueprint $table) {
            $table->text('priority_field')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('process_fields', function (Blueprint $table) {
            $table->dropColumn('priority_field');
        });
    }
};
