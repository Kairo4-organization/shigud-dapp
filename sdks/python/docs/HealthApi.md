# sipher_client.HealthApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_errors**](HealthApi.md#get_errors) | **GET** /v1/errors | Error code catalog
[**get_health**](HealthApi.md#get_health) | **GET** /v1/health | Health check
[**get_ready**](HealthApi.md#get_ready) | **GET** /v1/ready | Readiness probe


# **get_errors**
> GetErrors200Response get_errors()

Error code catalog

Returns all API error codes with descriptions, HTTP statuses, and retry guidance.

### Example


```python
import sipher_client
from sipher_client.models.get_errors200_response import GetErrors200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)


# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.HealthApi(api_client)

    try:
        # Error code catalog
        api_response = api_instance.get_errors()
        print("The response of HealthApi->get_errors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->get_errors: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetErrors200Response**](GetErrors200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error catalog |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_health**
> GetHealth200Response get_health()

Health check

### Example


```python
import sipher_client
from sipher_client.models.get_health200_response import GetHealth200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)


# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.HealthApi(api_client)

    try:
        # Health check
        api_response = api_instance.get_health()
        print("The response of HealthApi->get_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->get_health: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetHealth200Response**](GetHealth200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service is healthy |  -  |
**503** | Service unhealthy or shutting down |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ready**
> GetReady200Response get_ready()

Readiness probe

Returns 200 only if all critical systems are healthy. Use as Docker/k8s readiness probe.

### Example


```python
import sipher_client
from sipher_client.models.get_ready200_response import GetReady200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)


# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.HealthApi(api_client)

    try:
        # Readiness probe
        api_response = api_instance.get_ready()
        print("The response of HealthApi->get_ready:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HealthApi->get_ready: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetReady200Response**](GetReady200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service is ready to accept requests |  -  |
**503** | Service not ready |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

