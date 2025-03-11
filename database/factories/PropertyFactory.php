<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    protected $model = Property::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'is_active' => $this->faker->boolean(),
            'is_favorite' => $this->faker->boolean(),
            'description' => $this->faker->text(),
            'street' => $this->faker->randomElement(['R', 'Av']).'. '.$this->faker->streetName(),
            'street_number' => $this->faker->randomNumber(4),
            'neighborhood' => $this->faker->city(),
            'city' => $this->faker->city(),
            'area_size' => $this->faker->randomNumber(3),
            'price' => $this->faker->randomNumber(4),
            'condo_fee' => $this->faker->randomNumber(3),
            'agent_id' => $this->faker->randomElement(['JP', 'SQ']),
            'operation_type' => $this->faker->randomElement(['Aluguel', 'Compra', 'Temporada']),
            'property_type' => $this->faker->randomElement(['Apartamento', 'Casa', 'Ponto Comercial','Terreno','Sala']),
            'bedrooms' => $this->faker->randomNumber(1),
            'master_bedrooms' => $this->faker->randomNumber(1),
            'bathrooms' => $this->faker->randomNumber(1),
            'rooms' => $this->faker->randomNumber(1),
            'kitchens' => $this->faker->numberBetween(0, 1),
            'service_rooms' => $this->faker->numberBetween(0, 1),
            'parking_spots' => $this->faker->numberBetween(0, 1),
        ];
    }
}
