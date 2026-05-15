<?php
declare(strict_types=1);

// RandomFox SDK utility: prepare_body

class RandomFoxPrepareBody
{
    public static function call(RandomFoxContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
