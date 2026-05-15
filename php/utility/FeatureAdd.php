<?php
declare(strict_types=1);

// RandomFox SDK utility: feature_add

class RandomFoxFeatureAdd
{
    public static function call(RandomFoxContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
