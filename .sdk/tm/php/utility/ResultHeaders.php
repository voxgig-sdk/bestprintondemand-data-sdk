<?php
declare(strict_types=1);

// BestprintondemandData SDK utility: result_headers

class BestprintondemandDataResultHeaders
{
    public static function call(BestprintondemandDataContext $ctx): ?BestprintondemandDataResult
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
