<?php
declare(strict_types=1);

// BestprintondemandData SDK base feature

class BestprintondemandDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BestprintondemandDataContext $ctx, array $options): void {}
    public function PostConstruct(BestprintondemandDataContext $ctx): void {}
    public function PostConstructEntity(BestprintondemandDataContext $ctx): void {}
    public function SetData(BestprintondemandDataContext $ctx): void {}
    public function GetData(BestprintondemandDataContext $ctx): void {}
    public function GetMatch(BestprintondemandDataContext $ctx): void {}
    public function SetMatch(BestprintondemandDataContext $ctx): void {}
    public function PrePoint(BestprintondemandDataContext $ctx): void {}
    public function PreSpec(BestprintondemandDataContext $ctx): void {}
    public function PreRequest(BestprintondemandDataContext $ctx): void {}
    public function PreResponse(BestprintondemandDataContext $ctx): void {}
    public function PreResult(BestprintondemandDataContext $ctx): void {}
    public function PreDone(BestprintondemandDataContext $ctx): void {}
    public function PreUnexpected(BestprintondemandDataContext $ctx): void {}
}
