<?php
declare(strict_types=1);

// RandomFox SDK base feature

class RandomFoxBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RandomFoxContext $ctx, array $options): void {}
    public function PostConstruct(RandomFoxContext $ctx): void {}
    public function PostConstructEntity(RandomFoxContext $ctx): void {}
    public function SetData(RandomFoxContext $ctx): void {}
    public function GetData(RandomFoxContext $ctx): void {}
    public function GetMatch(RandomFoxContext $ctx): void {}
    public function SetMatch(RandomFoxContext $ctx): void {}
    public function PrePoint(RandomFoxContext $ctx): void {}
    public function PreSpec(RandomFoxContext $ctx): void {}
    public function PreRequest(RandomFoxContext $ctx): void {}
    public function PreResponse(RandomFoxContext $ctx): void {}
    public function PreResult(RandomFoxContext $ctx): void {}
    public function PreDone(RandomFoxContext $ctx): void {}
    public function PreUnexpected(RandomFoxContext $ctx): void {}
}
