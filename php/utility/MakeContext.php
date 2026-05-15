<?php
declare(strict_types=1);

// RandomFox SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RandomFoxMakeContext
{
    public static function call(array $ctxmap, ?RandomFoxContext $basectx): RandomFoxContext
    {
        return new RandomFoxContext($ctxmap, $basectx);
    }
}
