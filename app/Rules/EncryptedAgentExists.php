<?php

namespace App\Rules;

use App\Models\User;
use App\Services\Encryption;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class EncryptedAgentExists implements ValidationRule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function validate(string $attribute,mixed $value, Closure $fail): void
    {
        try {
            $decryptedId = Encryption::decrypt($value);

            if(!User::agents()->find($decryptedId)->exists()){
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
