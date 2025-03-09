<?php

namespace App\Http\Controllers\Adm;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmPagesController extends Controller
{
    public function dashboard(){
        return Inertia::render('Dashboard/Dashboard');
    }
}
