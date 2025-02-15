<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class TurnPasswordsIntoBcryptFormat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'passwords:bcrypt-all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Alters all user's passwords to match a bcrypt format";

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = User::all();
        $verified_passwords = 0;
        $altered_passwords = 0;

        foreach($users as $user){
            $verified_passwords++;

            if(!$this->isPasswordBcrypted($user->password)){
                $altered_passwords++;
                $user->password = bcrypt($user->password);
                $user->save();
            }
        }
        $this->info("Verified passwords: " . $verified_passwords);
        $this->info("Altered passwords: " . $altered_passwords);
    }

    private function isPasswordBcrypted(string $password): Bool{
        return preg_match('/^\$2[ayb]\$\d{2}\$[\.\/A-Za-z0-9]{53}$/', $password) === 1;
    }
}
