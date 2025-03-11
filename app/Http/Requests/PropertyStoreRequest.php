<?php

namespace App\Http\Requests;

use App\Rules\EncryptedAgentExists;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PropertyStoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'is_active'        => 'boolean',
            'description'      => 'required|string',
            'street'           => 'required|string|max:100',
            'street_number'    => 'required|integer',
            'neighborhood'     => 'required_without:new_neighborhood|prohibits:new_neighborhood|nullable|max:50',
            'new_neighborhood' => 'required_without:neighborhood|prohibits:neighborhood|string|nullable|max:50',
            'city'             => 'required|string|max:50',
            'area_size'        => 'required|integer|min:1',
            'price'            => 'required|integer|min:1',
            'condo_fee'        => 'nullable|integer|min:0',
            'agent_id'         => ['required','string','max:255',new EncryptedAgentExists],
            'operation_type'   => [
                'required',
                Rule::in(['Aluguel', 'Venda', 'Temporada']),
            ],
            'property_type' => [
                'required',
                Rule::in(['Casa', 'Apartamento', 'Ponto Comercial', 'Terreno', 'Sala']),
            ],
            'bedrooms'        => 'required|integer|min:0',
            'master_bedrooms' => 'required|integer|min:0',
            'bathrooms'       => 'required|integer|min:0',
            'rooms'           => 'required|integer|min:0',
            'kitchens'        => 'required|integer|min:0',
            'service_rooms'   => 'nullable|integer|min:0',
            'parking_spots'   => 'nullable|integer|min:0',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'required' => 'O campo :attribute é obrigatório.',
            'string' => 'O campo :attribute deve ser um texto.',
            'max' => 'O campo :attribute não pode ter mais que :max caracteres.',
            'integer' => 'O campo :attribute deve ser um número inteiro.',
            'min' => 'O campo :attribute deve ser no mínimo :min.',
            'boolean' => 'O campo :attribute deve ser verdadeiro ou falso.',
            'operation_type.in' => 'O tipo de operação deve ser Aluguel, Venda ou Temporada.',
            'property_type.in' => 'O tipo de propriedade deve ser Casa, Apartamento, Sala, Ponto Comercial ou Terreno.',
            'neighborhood.required_without' => 'O campo Bairro é obrigatório quando Novo Bairro não está preenchido.',
            'new_neighborhood.required_without' => 'O campo Novo Bairro é obrigatório quando Bairro não está preenchido.',
            'neighborhood.prohibits' => 'Os campos Bairro e Novo Bairro não podem ser preenchidos simultaneamente.',
            'new_neighborhood.prohibits' => 'Os campos Novo Bairro e Bairro não podem ser preenchidos simultaneamente.',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'is_active' => 'Ativo',
            'description' => 'Descrição',
            'street' => 'Rua',
            'street_number' => 'Número',
            'neighborhood' => 'Bairro',
            'new_neighborhood' => 'Novo Bairro',
            'city' => 'Cidade',
            'area_size' => 'Área',
            'price' => 'Preço',
            'condo_fee' => 'Taxa de condomínio',
            'agent_id' => 'Identificador do agente',
            'operation_type' => 'Tipo de operação',
            'property_type' => 'Tipo de propriedade',
            'bedrooms' => 'Quartos',
            'master_bedrooms' => 'Suítes',
            'bathrooms' => 'Banheiros',
            'rooms' => 'Salas',
            'kitchens' => 'Cozinhas',
            'service_rooms' => 'Áreas de serviço',
            'parking_spots' => 'Vagas de garagem',
        ];
    }
}
