<?php

namespace App;

use Illuminate\Contracts\Encryption\EncryptException;
use Illuminate\Support\Facades\Crypt;

class Encryption
{
    public static function encrypt(int $id){
        if(!is_int($id)){
            throw new EncryptException("Value must be an int to encrypt");
        }

        try {
            $encrypted_id = Crypt::encrypt($id);
            return $encrypted_id;

        } catch(EncryptException $e) {
            throw new EncryptException("Encryption error: " . $e);
        }
    }

    public static function decrypt(string $encrypted_id){
        if(!is_string($encrypted_id)){
            throw new EncryptException("Value must be an string to decrypt");
        }
        try {
            $id = Crypt::decrypt($encrypted_id);
            return $id;
        } catch(EncryptException $e) {
            throw new EncryptException("Decryption error: " . $e);
        }
    }
}
