<?php
declare(strict_types=1);

// RandomFox SDK utility: result_headers

class RandomFoxResultHeaders
{
    public static function call(RandomFoxContext $ctx): ?RandomFoxResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
