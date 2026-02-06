# sipher_client.PrivacyApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**privacy_score**](PrivacyApi.md#privacy_score) | **POST** /v1/privacy/score | Analyze wallet privacy score


# **privacy_score**
> PrivacyScore200Response privacy_score(privacy_score_request)

Analyze wallet privacy score

Analyzes on-chain activity of a Solana wallet and returns a 0-100 privacy score with breakdown by factor and actionable recommendations.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.privacy_score200_response import PrivacyScore200Response
from sipher_client.models.privacy_score_request import PrivacyScoreRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.PrivacyApi(api_client)
    privacy_score_request = sipher_client.PrivacyScoreRequest() # PrivacyScoreRequest | 

    try:
        # Analyze wallet privacy score
        api_response = api_instance.privacy_score(privacy_score_request)
        print("The response of PrivacyApi->privacy_score:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivacyApi->privacy_score: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **privacy_score_request** | [**PrivacyScoreRequest**](PrivacyScoreRequest.md)|  | 

### Return type

[**PrivacyScore200Response**](PrivacyScore200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Privacy score analysis |  -  |
**400** | Invalid address |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

