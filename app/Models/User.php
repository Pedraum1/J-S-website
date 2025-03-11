<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Services\Encryption;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'creci_number',
        'occupation',
        'photo',
        '',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public static function agents(){
        return User::where('occupation','corretor');
    }

    public function encryptId(): void
    {
        $encrypted_id = Encryption::encrypt($this->id);
        $this->encrypted_id = $encrypted_id;
        $this->makeHidden('id')->setAttribute('id', $encrypted_id);
    }

    public function properties(): HasMany {
        return $this->hasMany(Property::class, 'agent_id', 'id');
    }
}
