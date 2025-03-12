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
    public function encryptId(): void
    {
        $encrypted_id = Encryption::encrypt($this->id);
        $this->makeHidden('id');
        $this->setAttribute('encrypted_id', $encrypted_id);
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
