<?php

namespace iEducar\Packages\PreMatricula\Events;

use iEducar\Packages\PreMatricula\Models\PreRegistration;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;

class PreRegistrationAddressUpdatedEvent
{
    use Dispatchable;

    public function __construct(
        public PreRegistration $preregistration,
        public array $before,
        public array $after,
        public ?Model $user = null
    ) {
        $this->user = $user ?? \Auth::user();
    }
}
