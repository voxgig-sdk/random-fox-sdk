<?php
declare(strict_types=1);

// RandomFox SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RandomFoxFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RandomFoxBaseFeature();
            case "test":
                return new RandomFoxTestFeature();
            default:
                return new RandomFoxBaseFeature();
        }
    }
}
