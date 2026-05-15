<?php
declare(strict_types=1);

// RandomFox SDK utility: result_body

class RandomFoxResultBody
{
    public static function call(RandomFoxContext $ctx): ?RandomFoxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
