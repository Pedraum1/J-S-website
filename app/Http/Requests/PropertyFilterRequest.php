<?php

namespace App\Http\Requests;

use App\Models\Property;
use App\Rules\EncryptedNeighborhoodExists;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PropertyFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'property_type' => ['nullable', Rule::in(Property::property_types())],
            'operation_type' => ['nullable', Rule::in(Property::operation_types())],
            'max_value' => ['nullable', 'numeric', 'min:0'],
            'neighborhood_id' => ['nullable', new EncryptedNeighborhoodExists],
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'property_type' => 'tipo de imóvel',
            'operation_type' => 'tipo de operação',
            'max_value' => 'valor máximo',
            'neighborhood_id' => 'bairro',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'property_type.in' => 'O :attribute deve ser Apartamento, Casa, Terreno, Sala ou Ponto Comercial.',
            'operation_type.in' => 'O :attribute deve ser Aluguel, Venda ou Temporada.',
            'max_value.numeric' => 'O :attribute deve ser um valor numérico.',
            'max_value.min' => 'O :attribute deve ser maior ou igual a 0.',
            'neighborhood_id.exists' => 'O :attribute selecionado não existe na nossa base de dados.',
        ];
    }
}
