<?php
declare(strict_types=1);

// RandomFox SDK utility: make_fetch_def

require_once __DIR__ . '/../core/Result.php';
require_once __DIR__ . '/Media.php';

class RandomFoxMakeFetchDef
{
    public static function call(RandomFoxContext $ctx): array
    {
        $spec = $ctx->spec;
        if (!$spec) {
            return [null, $ctx->make_error('fetchdef_no_spec', 'Expected context spec property to be defined.')];
        }

        if (!$ctx->result) {
            $ctx->result = new RandomFoxResult([]);
        }
        $spec->step = 'prepare';

        [$url, $err] = ($ctx->utility->make_url)($ctx);
        if ($err) {
            return [null, $err];
        }

        $spec->url = $url;

        $fetchdef = ['url' => $url, 'method' => $spec->method, 'headers' => $spec->headers];
        if ($spec->body !== null) {
            $fetchdef['body'] = RandomFoxMedia::requestBody($ctx->point, $spec->body);
        }

        return [$fetchdef, null];
    }
}
