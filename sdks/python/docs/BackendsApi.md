# sipher_client.BackendsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backends_compare**](BackendsApi.md#backends_compare) | **POST** /v1/backends/compare | Compare privacy backends
[**backends_health**](BackendsApi.md#backends_health) | **GET** /v1/backends/{id}/health | Check backend health
[**backends_list**](BackendsApi.md#backends_list) | **GET** /v1/backends | List privacy backends
[**backends_select**](BackendsApi.md#backends_select) | **POST** /v1/backends/select | Select preferred backend


# **backends_compare**
> BackendsCompare200Response backends_compare(backends_compare_request)

Compare privacy backends

Compare available privacy backends for a given operation type, returning cost, latency, privacy level, and recommendations.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.backends_compare200_response import BackendsCompare200Response
from sipher_client.models.backends_compare_request import BackendsCompareRequest
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
    api_instance = sipher_client.BackendsApi(api_client)
    backends_compare_request = sipher_client.BackendsCompareRequest() # BackendsCompareRequest | 

    try:
        # Compare privacy backends
        api_response = api_instance.backends_compare(backends_compare_request)
        print("The response of BackendsApi->backends_compare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackendsApi->backends_compare: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backends_compare_request** | [**BackendsCompareRequest**](BackendsCompareRequest.md)|  | 

### Return type

[**BackendsCompare200Response**](BackendsCompare200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Backend comparison results with recommendations |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backends_health**
> BackendsHealth200Response backends_health(id)

Check backend health

Probes a specific backend for availability, returns circuit breaker state, metrics, and capabilities.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.backends_health200_response import BackendsHealth200Response
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
    api_instance = sipher_client.BackendsApi(api_client)
    id = 'id_example' # str | Backend name (e.g., sip-native)

    try:
        # Check backend health
        api_response = api_instance.backends_health(id)
        print("The response of BackendsApi->backends_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackendsApi->backends_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Backend name (e.g., sip-native) | 

### Return type

[**BackendsHealth200Response**](BackendsHealth200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Backend health details |  -  |
**404** | Backend not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backends_list**
> BackendsList200Response backends_list()

List privacy backends

Returns all registered privacy backends with capabilities, health state, and priority. Backends implement different privacy strategies (stealth addresses, FHE, MPC).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.backends_list200_response import BackendsList200Response
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
    api_instance = sipher_client.BackendsApi(api_client)

    try:
        # List privacy backends
        api_response = api_instance.backends_list()
        print("The response of BackendsApi->backends_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackendsApi->backends_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BackendsList200Response**](BackendsList200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of registered backends |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backends_select**
> BackendsSelect200Response backends_select(backends_select_request)

Select preferred backend

Sets the preferred privacy backend for the authenticated API key. Requires a tiered API key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.backends_select200_response import BackendsSelect200Response
from sipher_client.models.backends_select_request import BackendsSelectRequest
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
    api_instance = sipher_client.BackendsApi(api_client)
    backends_select_request = sipher_client.BackendsSelectRequest() # BackendsSelectRequest | 

    try:
        # Select preferred backend
        api_response = api_instance.backends_select(backends_select_request)
        print("The response of BackendsApi->backends_select:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackendsApi->backends_select: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backends_select_request** | [**BackendsSelectRequest**](BackendsSelectRequest.md)|  | 

### Return type

[**BackendsSelect200Response**](BackendsSelect200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Backend preference saved |  -  |
**400** | Validation error or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

