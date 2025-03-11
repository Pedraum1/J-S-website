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
    Route::get('/', 'list')->name('property.list');
    Route::get('/pesquisar/{text}', 'search_property_by_name')->name('property.search');
    Route::get('/pesquisar/', 'search_property_by_fiters')->name('property.filter');
    Route::get('/{encrypted_id}', 'property_description')->name('property.description');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(PropertyController::class)->prefix('/dashboard')->group(function () {
        Route::get('/', 'index')->name('dashboard');
        Route::get('/adicionar-imovel', 'create')->name('dashboard.create');
        Route::post('/store', 'store')->name('dashboard.store');

        Route::get('/atualizar-imovel/{encrypted_id}', 'edit')->name('dashboard.edit');
        Route::patch('/update/{encrypted_id}', 'update')->name('dashboard.update');

        Route::put('/{encrypted_id}/toggle', 'toggle')->name('dashboard.toggle');
        Route::put('/{encrypted_id}/favorite', 'favorite')->name('dashboard.favorite');

        Route::delete('/{encrypted_id}', 'destroy')->name('dashboard.destroy');
    });
});

require __DIR__.'/auth.php';
