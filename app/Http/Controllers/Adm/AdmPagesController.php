<?php

namespace App\Http\Controllers\Adm;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdmPagesController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard/Dashboard');
    }
}
