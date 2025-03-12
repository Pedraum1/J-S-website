<?php

namespace App\Models;

use App\Traits\HasEncryptedId;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Property extends Model
{
    use HasEncryptedId, HasFactory;

    protected $table = 'property';

    protected $fillable = [
        'is_active',
        'is_favorite',
        'description',
        'street',
        'street_number',
        'neighborhood',
        'city',
        'area_size',
        'price',
        'condo_fee',
        'agent_id',
        'operation_type',
        'property_type',
        'bedrooms',
        'master_bedrooms',
        'bathrooms',
        'rooms',
        'kitchens',
        'service_rooms',
        'parking_spots',
    ];

    public static function property_types(): array
    {
        return ['Casa', 'Apartamento', 'Terreno', 'Ponto Comercial', 'Sala'];
    }

    public static function operation_types(): array
    {
        return ['Aluguel', 'Venda', 'Temporada'];
    }

    public function photos(): HasMany
    {
        return $this->hasMany(Image::class, 'original_id', 'id');
    }

    public function main_photo()
    {
        return $this->photos()->latest();
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFavorites($query)
    {
        return $query->active()->where('is_favorite', true)->with(['main_photo'])->take(8);
    }

    public function agent(): BelongsTo
    {
        return $this->belongsTo(User::class, 'agent_id', 'id');
    }
}
