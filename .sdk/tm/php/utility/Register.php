<?php
declare(strict_types=1);

// RandomFox SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RandomFoxUtility::setRegistrar(function (RandomFoxUtility $u): void {
    $u->clean = [RandomFoxClean::class, 'call'];
    $u->done = [RandomFoxDone::class, 'call'];
    $u->make_error = [RandomFoxMakeError::class, 'call'];
    $u->feature_add = [RandomFoxFeatureAdd::class, 'call'];
    $u->feature_hook = [RandomFoxFeatureHook::class, 'call'];
    $u->feature_init = [RandomFoxFeatureInit::class, 'call'];
    $u->fetcher = [RandomFoxFetcher::class, 'call'];
    $u->make_fetch_def = [RandomFoxMakeFetchDef::class, 'call'];
    $u->make_context = [RandomFoxMakeContext::class, 'call'];
    $u->make_options = [RandomFoxMakeOptions::class, 'call'];
    $u->make_request = [RandomFoxMakeRequest::class, 'call'];
    $u->make_response = [RandomFoxMakeResponse::class, 'call'];
    $u->make_result = [RandomFoxMakeResult::class, 'call'];
    $u->make_point = [RandomFoxMakePoint::class, 'call'];
    $u->make_spec = [RandomFoxMakeSpec::class, 'call'];
    $u->make_url = [RandomFoxMakeUrl::class, 'call'];
    $u->param = [RandomFoxParam::class, 'call'];
    $u->prepare_auth = [RandomFoxPrepareAuth::class, 'call'];
    $u->prepare_body = [RandomFoxPrepareBody::class, 'call'];
    $u->prepare_headers = [RandomFoxPrepareHeaders::class, 'call'];
    $u->prepare_method = [RandomFoxPrepareMethod::class, 'call'];
    $u->prepare_params = [RandomFoxPrepareParams::class, 'call'];
    $u->prepare_path = [RandomFoxPreparePath::class, 'call'];
    $u->prepare_query = [RandomFoxPrepareQuery::class, 'call'];
    $u->result_basic = [RandomFoxResultBasic::class, 'call'];
    $u->result_body = [RandomFoxResultBody::class, 'call'];
    $u->result_headers = [RandomFoxResultHeaders::class, 'call'];
    $u->transform_request = [RandomFoxTransformRequest::class, 'call'];
    $u->transform_response = [RandomFoxTransformResponse::class, 'call'];
});
