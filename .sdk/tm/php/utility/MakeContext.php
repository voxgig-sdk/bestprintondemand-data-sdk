<?php
declare(strict_types=1);

// BestprintondemandData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BestprintondemandDataMakeContext
{
    public static function call(array $ctxmap, ?BestprintondemandDataContext $basectx): BestprintondemandDataContext
    {
        return new BestprintondemandDataContext($ctxmap, $basectx);
    }
}
