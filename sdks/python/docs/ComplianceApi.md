# sipher_client.ComplianceApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compliance_disclose**](ComplianceApi.md#compliance_disclose) | **POST** /v1/compliance/disclose | Selective disclosure with scoped viewing key (enterprise)
[**compliance_report**](ComplianceApi.md#compliance_report) | **POST** /v1/compliance/report | Generate encrypted audit report (enterprise)
[**get_compliance_report**](ComplianceApi.md#get_compliance_report) | **GET** /v1/compliance/report/{id} | Retrieve generated compliance report (enterprise)


# **compliance_disclose**
> ComplianceDisclose200Response compliance_disclose(compliance_disclose_request)

Selective disclosure with scoped viewing key (enterprise)

Creates a selective disclosure for a verified auditor. Derives a scoped viewing key limited to the specified scope, encrypts transaction data, and returns the disclosure record. Requires enterprise tier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.compliance_disclose200_response import ComplianceDisclose200Response
from sipher_client.models.compliance_disclose_request import ComplianceDiscloseRequest
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
    api_instance = sipher_client.ComplianceApi(api_client)
    compliance_disclose_request = sipher_client.ComplianceDiscloseRequest() # ComplianceDiscloseRequest | 

    try:
        # Selective disclosure with scoped viewing key (enterprise)
        api_response = api_instance.compliance_disclose(compliance_disclose_request)
        print("The response of ComplianceApi->compliance_disclose:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->compliance_disclose: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compliance_disclose_request** | [**ComplianceDiscloseRequest**](ComplianceDiscloseRequest.md)|  | 

### Return type

[**ComplianceDisclose200Response**](ComplianceDisclose200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disclosure created |  -  |
**400** | Validation error |  -  |
**403** | Tier access denied (enterprise only) |  -  |
**500** | Disclosure failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compliance_report**
> ComplianceReport200Response compliance_report(compliance_report_request)

Generate encrypted audit report (enterprise)

Generates an encrypted compliance audit report for the specified time range. Verifies auditor identity, produces transaction summaries with encrypted entries, and caches the report for 24 hours. Requires enterprise tier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.compliance_report200_response import ComplianceReport200Response
from sipher_client.models.compliance_report_request import ComplianceReportRequest
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
    api_instance = sipher_client.ComplianceApi(api_client)
    compliance_report_request = sipher_client.ComplianceReportRequest() # ComplianceReportRequest | 

    try:
        # Generate encrypted audit report (enterprise)
        api_response = api_instance.compliance_report(compliance_report_request)
        print("The response of ComplianceApi->compliance_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->compliance_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compliance_report_request** | [**ComplianceReportRequest**](ComplianceReportRequest.md)|  | 

### Return type

[**ComplianceReport200Response**](ComplianceReport200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report generated |  -  |
**400** | Validation error |  -  |
**403** | Tier access denied (enterprise only) |  -  |
**500** | Report generation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compliance_report**
> GetComplianceReport200Response get_compliance_report(id)

Retrieve generated compliance report (enterprise)

Retrieves a previously generated compliance audit report by ID. Reports are cached for 24 hours after generation. Requires enterprise tier.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_compliance_report200_response import GetComplianceReport200Response
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
    api_instance = sipher_client.ComplianceApi(api_client)
    id = 'id_example' # str | Report ID returned from POST /v1/compliance/report

    try:
        # Retrieve generated compliance report (enterprise)
        api_response = api_instance.get_compliance_report(id)
        print("The response of ComplianceApi->get_compliance_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceApi->get_compliance_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Report ID returned from POST /v1/compliance/report | 

### Return type

[**GetComplianceReport200Response**](GetComplianceReport200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report found |  -  |
**400** | Invalid report ID format |  -  |
**403** | Tier access denied (enterprise only) |  -  |
**404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

