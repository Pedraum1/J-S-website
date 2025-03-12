<?php

namespace App\Rules;

use App\Models\Neighborhood;
use App\Services\Encryption;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class EncryptedNeighborhoodExists implements ValidationRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        try {
            $decryptedId = Encryption::decrypt($value);

            if (! Neighborhood::find($decryptedId)->exists()) {
                $fail('O :attribute selecionado é inválido.');
            }
        } catch (\Throwable $e) {
            $fail('O :attribute não pôde ser validado devido a um erro de desencriptação.');
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'O :attribute selecionado é inválido.';
    }
}
