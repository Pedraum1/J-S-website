<?php

namespace App\Traits;

use App\Services\Encryption;
use Illuminate\Database\Eloquent\Model;

trait HasEncryptedId
{
    /**
     * Return model's encrytped id.
     *
     * @return string
     */
    public function encryptId(string $property_name = 'id'): void
    {
        if (isset($this->$property_name) || array_key_exists($property_name, $this->attributes)) {
            $encrypted_property = Encryption::encrypt($this->$property_name);
            $this->setAttribute('encrypted_'.$property_name, $encrypted_property);
        }
    }

    /**
     * Find model by encrypted id.
     *
     * @param  string  $encryptedId
     */
    public static function findByEncryptedId(string $encrypted_id): ?Model
    {
        try {
            $id = Encryption::decrypt($encrypted_id);

            return static::findOrFail($id);
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Find model by encrypted id or fail.
     *
     * @param  string  $encryptedId
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public static function findByEncryptedIdOrFail(string $encrypted_id): Model
    {
        $id = Encryption::decrypt($encrypted_id);

        return static::findOrFail($id);
    }
}
