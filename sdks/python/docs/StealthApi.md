# sipher_client.StealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stealth_check**](StealthApi.md#stealth_check) | **POST** /v1/stealth/check | Check stealth address ownership
[**stealth_derive**](StealthApi.md#stealth_derive) | **POST** /v1/stealth/derive | Derive one-time stealth address
[**stealth_generate**](StealthApi.md#stealth_generate) | **POST** /v1/stealth/generate | Generate stealth meta-address keypair
[**stealth_generate_batch**](StealthApi.md#stealth_generate_batch) | **POST** /v1/stealth/generate/batch | Batch generate stealth keypairs


# **stealth_check**
> StealthCheck200Response stealth_check(stealth_check_request)

Check stealth address ownership

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.stealth_check200_response import StealthCheck200Response
from sipher_client.models.stealth_check_request import StealthCheckRequest
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
    api_instance = sipher_client.StealthApi(api_client)
    stealth_check_request = sipher_client.StealthCheckRequest() # StealthCheckRequest | 

    try:
        # Check stealth address ownership
        api_response = api_instance.stealth_check(stealth_check_request)
        print("The response of StealthApi->stealth_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StealthApi->stealth_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stealth_check_request** | [**StealthCheckRequest**](StealthCheckRequest.md)|  | 

### Return type

[**StealthCheck200Response**](StealthCheck200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ownership check result |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stealth_derive**
> StealthDerive200Response stealth_derive(stealth_derive_request)

Derive one-time stealth address

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.stealth_derive200_response import StealthDerive200Response
from sipher_client.models.stealth_derive_request import StealthDeriveRequest
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
    api_instance = sipher_client.StealthApi(api_client)
    stealth_derive_request = sipher_client.StealthDeriveRequest() # StealthDeriveRequest | 

    try:
        # Derive one-time stealth address
        api_response = api_instance.stealth_derive(stealth_derive_request)
        print("The response of StealthApi->stealth_derive:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StealthApi->stealth_derive: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stealth_derive_request** | [**StealthDeriveRequest**](StealthDeriveRequest.md)|  | 

### Return type

[**StealthDerive200Response**](StealthDerive200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stealth address derived |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stealth_generate**
> StealthGenerate200Response stealth_generate(stealth_generate_request)

Generate stealth meta-address keypair

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.stealth_generate200_response import StealthGenerate200Response
from sipher_client.models.stealth_generate_request import StealthGenerateRequest
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
    api_instance = sipher_client.StealthApi(api_client)
    stealth_generate_request = sipher_client.StealthGenerateRequest() # StealthGenerateRequest | 

    try:
        # Generate stealth meta-address keypair
        api_response = api_instance.stealth_generate(stealth_generate_request)
        print("The response of StealthApi->stealth_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StealthApi->stealth_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stealth_generate_request** | [**StealthGenerateRequest**](StealthGenerateRequest.md)|  | 

### Return type

[**StealthGenerate200Response**](StealthGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stealth meta-address generated |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stealth_generate_batch**
> StealthGenerateBatch200Response stealth_generate_batch(stealth_generate_batch_request)

Batch generate stealth keypairs

Generate multiple stealth meta-address keypairs in a single call. Max 100 per request.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.stealth_generate_batch200_response import StealthGenerateBatch200Response
from sipher_client.models.stealth_generate_batch_request import StealthGenerateBatchRequest
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
    api_instance = sipher_client.StealthApi(api_client)
    stealth_generate_batch_request = sipher_client.StealthGenerateBatchRequest() # StealthGenerateBatchRequest | 

    try:
        # Batch generate stealth keypairs
        api_response = api_instance.stealth_generate_batch(stealth_generate_batch_request)
        print("The response of StealthApi->stealth_generate_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StealthApi->stealth_generate_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stealth_generate_batch_request** | [**StealthGenerateBatchRequest**](StealthGenerateBatchRequest.md)|  | 

### Return type

[**StealthGenerateBatch200Response**](StealthGenerateBatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Batch generation results |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

