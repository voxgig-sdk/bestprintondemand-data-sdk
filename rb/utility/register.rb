# BestprintondemandData SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BestprintondemandDataUtility.registrar = ->(u) {
  u.clean = BestprintondemandDataUtilities::Clean
  u.clean_add = BestprintondemandDataUtilities::CleanAdd
  u.clean_explain = BestprintondemandDataUtilities::CleanExplain
  u.done = BestprintondemandDataUtilities::Done
  u.make_error = BestprintondemandDataUtilities::MakeError
  u.feature_add = BestprintondemandDataUtilities::FeatureAdd
  u.feature_hook = BestprintondemandDataUtilities::FeatureHook
  u.feature_init = BestprintondemandDataUtilities::FeatureInit
  u.fetcher = BestprintondemandDataUtilities::Fetcher
  u.make_fetch_def = BestprintondemandDataUtilities::MakeFetchDef
  u.make_context = BestprintondemandDataUtilities::MakeContext
  u.make_options = BestprintondemandDataUtilities::MakeOptions
  u.make_request = BestprintondemandDataUtilities::MakeRequest
  u.make_response = BestprintondemandDataUtilities::MakeResponse
  u.make_result = BestprintondemandDataUtilities::MakeResult
  u.make_point = BestprintondemandDataUtilities::MakePoint
  u.make_spec = BestprintondemandDataUtilities::MakeSpec
  u.make_url = BestprintondemandDataUtilities::MakeUrl
  u.param = BestprintondemandDataUtilities::Param
  u.prepare_auth = BestprintondemandDataUtilities::PrepareAuth
  u.prepare_body = BestprintondemandDataUtilities::PrepareBody
  u.prepare_headers = BestprintondemandDataUtilities::PrepareHeaders
  u.prepare_method = BestprintondemandDataUtilities::PrepareMethod
  u.prepare_params = BestprintondemandDataUtilities::PrepareParams
  u.prepare_path = BestprintondemandDataUtilities::PreparePath
  u.prepare_query = BestprintondemandDataUtilities::PrepareQuery
  u.graphql_body = BestprintondemandDataUtilities::GraphqlBody
  u.graphql_errors = BestprintondemandDataUtilities::GraphqlErrors
  u.result_basic = BestprintondemandDataUtilities::ResultBasic
  u.result_body = BestprintondemandDataUtilities::ResultBody
  u.result_headers = BestprintondemandDataUtilities::ResultHeaders
  u.transform_request = BestprintondemandDataUtilities::TransformRequest
  u.transform_response = BestprintondemandDataUtilities::TransformResponse
}
