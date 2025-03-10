<?php

use App\Http\Controllers\Adm\PropertyController;
use App\Http\Controllers\Pages\GuestPagesController;
use App\Http\Controllers\Pages\PropertyPagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::controller(GuestPagesController::class)->group(function () {
    Route::get('/', [GuestPagesController::class, 'home']);
});

Route::controller(PropertyPagesController::class)->prefix('/imovel')->group(function () {
    Route::get('/pesquisar', 'list');
    Route::get('/pesquisar/{text}', 'search_property_by_name');
    Route::get('/pesquisar/{type?}/{operation?}/{neighborhood?}/{max_value?}', 'search_property_by_fiters');
    Route::get('/{encrypted_id}', 'property_description');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(PropertyController::class)->prefix('/dashboard')->group(function () {
        Route::get('/', 'index')->name('dashboard');
        Route::get('/adicionar-imovel', 'create');

        Route::put('/{encrypted_id}/toggle', 'toggle');
        Route::put('/{encrypted_id}/favorite', 'favorite');

        Route::delete('/{encrypted_id}', 'destroy');
    });
});

require __DIR__.'/auth.php';
